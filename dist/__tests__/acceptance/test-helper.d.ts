import { Client } from '@loopback/testlab';
import { TaskListApplication } from '../..';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: TaskListApplication;
    client: Client;
}
