import { AuthModel } from '@modules/auth';

import { IRecord } from './record.typings';

export class RecordModel {
  static async getAll(user: string): Promise<IRecord[]> {
    console.log(await AuthModel.findId(user));
    return [];
  }
}
