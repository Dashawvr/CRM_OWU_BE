import {NextFunction, Response} from 'express';

import {ICourseParams, ICourseUpdateFields, IRequestExtended} from '../../interfaces';
import {ICourse} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {courseService} from '../../services';

class CourseController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      await courseService.create(req.body as ICourse);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.course as ICourse;

      await courseService.update(id, req.body as ICourseUpdateFields);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.course as ICourse;

      await courseService.delete(id);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const courses = await courseService.getAll(req.query as ICourseParams);

      res.json({
        data: courses
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IRequestExtended, res: Response, next: NextFunction): void {
    try {
      const course = req.course as ICourse;

      res.json({
        data: course
      });

    } catch (error) {
      next(error);
    }
  }
}

export const courseController = new CourseController();
