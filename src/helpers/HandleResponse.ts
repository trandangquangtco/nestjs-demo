import { HttpException, HttpStatus } from '@nestjs/common';

export default {
  badRequest(mess) {
    throw new HttpException(
      {
        code: HttpStatus.BAD_REQUEST,
        error: mess,
        status: false,
      },
      HttpStatus.BAD_REQUEST,
    );
  },

  unAuthorized() {
    throw new HttpException(
      {
        code: HttpStatus.UNAUTHORIZED,
        error: 'UnAuthorized',
        status: false,
      },
      HttpStatus.UNAUTHORIZED,
    );
  },

  sendOK(data: any) {
    throw new HttpException(
      {
        code: HttpStatus.OK,
        data: data,
        status: true,
      },
      HttpStatus.OK,
    );
  },

  sendCreated(data: any) {
    throw new HttpException(
      {
        code: HttpStatus.CREATED,
        data,
        status: true,
      },
      HttpStatus.CREATED,
    );
  },
};
// export { badRequest, unAuthorized };
