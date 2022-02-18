type options = {
  expires?: Date | string;
  path?: string;
  [key: string]: any;
};

export function setCookie(name: string, value: string, options: options = {}) {
  options = {
    path: "/",
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  Object.entries(options).forEach(([key, value]) => {
    updatedCookie += "; " + key;
    if (value !== true) {
      updatedCookie += "=" + value;
    }
  });
  document.cookie = updatedCookie;
}

export function getCookie(name: string): string | undefined {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)"
    )
  );
  return Array.isArray(matches)
    ? decodeURIComponent(matches[1] as string)
    : undefined;
}

export function delCookie(name: string) {
  const date = new Date();
  date.setMinutes(date.getMinutes() - 10);
  setCookie(name, "", { expires: date });
}
