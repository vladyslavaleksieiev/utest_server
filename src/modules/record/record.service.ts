import { Injectable } from '@nestjs/common';

import { RecordModel } from './record.model';

import { IRecord } from './record.typings';

@Injectable()
export class RecordService {
  async getAll(user: string): Promise<{ error?: IError, data?: IRecord[]}> { 
    await RecordModel.getAll(user);
    return {};
  }

  async getOne(id: string): Promise<string> { 
    return id;
  }

  async create(id: string): Promise<string> { 
    return id;
  }

  async patch(id: string): Promise<string> { 
    return id;
  }

  async remove(id: string): Promise<string> { 
    return id;
  }
}
