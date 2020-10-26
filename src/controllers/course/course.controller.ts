import {NextFunction, Request, Response} from 'express';

import {ICourseParams, ICourseRequestExtended, ICourseUpdateFields} from '../../interfaces';
import {ICourse} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {courseService} from '../../services';

class CourseController {

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await courseService.create(req.body as ICourse);

      res.status(ResponseStatusCodes.CREATED).end();

    } catch (error) {
      next(error);
    }
  }

  async update(req: ICourseRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.course as ICourse;

      await courseService.update(id, req.body as ICourseUpdateFields);

      res.status(ResponseStatusCodes.CREATED).end();

    } catch (error) {
      next(error);
    }
  }

  async delete(req: ICourseRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.course as ICourse;

      await courseService.delete(id);

      res.status(ResponseStatusCodes.NO_CONTENT).end();

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const courses = await courseService.getAll(req.query as ICourseParams);

      res.json({
        data: courses
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: ICourseRequestExtended, res: Response, next: NextFunction): void {
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
