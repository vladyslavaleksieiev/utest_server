import { IAuthorizedRequest } from '@modules/shared';
import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { Response } from 'express';

import { IRecord } from './record.typings';

import { RecordService } from './record.service';

@Controller('record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @Get('/')
  async getAll(
    @Req() request: IAuthorizedRequest,
    @Res({ passthrough: true }) response: Response,
  ): Promise<IData<IRecord[]>> {
    const records = await this.recordService.getAll(request.user);

    if (records.error) {
      response.status(records.error.status || HttpStatus.BAD_REQUEST);
      return { ok: false, message: records.error.message };
    }

    return { ok: true, data: records.data };
  }
}
