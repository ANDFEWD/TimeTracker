import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { delCookie, getCookie, setCookie } from "../utils/cookies";
import { TaskCreate, TaskModel } from "../typings";

export const urls = {
  account: {
    login: "/users/login",
    me: "/whoAmI",
    signUp: "/signup",
  },
  task: {
    list: "/task",
  },
};

class Endpoint {
  api: API;

  constructor(client: API) {
    this.api = client;
  }
}

class User extends Endpoint {
  signUp = async (body: any) => {
    const response = await this.api.client.post(urls.account.signUp, body);
    return response.data;
  };

  login = async (email: string, password: string): Promise<void> => {
    const response: AxiosResponse<{ token: string }> =
      await this.api.client.post(urls.account.login, {
        email,
        password,
      });

    this.api.token = { value: response.data.token };
  };

  logout = async () => {
    this.api.token = {};
  };

  get isAuthenticated(): boolean {
    return !!this.api.token.value;
  }

  whoAmI = async () => {
    const response = await this.api.client.get(urls.account.me);

    return response.data;
  };
}

class Task extends Endpoint {
  taskList: TaskModel[] = [];

  getList = async (userId: string) => {
    const reqFilter = {
      where: {
        userId,
      },
    };
    const toJSON = JSON.stringify(reqFilter);

    const response = await this.api.client.get(
      `${urls.task.list}?filter=${toJSON}`
    );
    this.taskList = response.data;
    return this.taskList;
  };

  create = async (body: TaskCreate) => {
    const response = await this.api.client.post(urls.task.list, body);
    this.taskList = [...this.taskList, response.data];
    return this.taskList;
  };
}

class API {
  _token_key = "token";
  user: User;
  task: Task;
  constructor() {
    this.user = new User(this);
    this.task = new Task(this);
  }

  get token(): { value: string | undefined; expires?: Date } {
    return { value: getCookie(this._token_key) };
  }

  set token({ value, expires }: { value?: string; expires?: Date }) {
    if (value) {
      setCookie(this._token_key, value, { expires });
    } else {
      delCookie(this._token_key);
    }
  }

  get config() {
    const axiosOptions: AxiosRequestConfig = {
      baseURL: "http://127.0.0.1:5000",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    if (this.token.value && axiosOptions.headers) {
      axiosOptions.headers["Authorization"] = `Bearer ${this.token.value}`;
    }
    return axiosOptions;
  }

  get client() {
    return Axios.create(this.config);
  }
}

export default new API();
