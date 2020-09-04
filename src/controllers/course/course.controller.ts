import {NextFunction, Response} from 'express';

import {ICourseParams, ICourseUpdateFields, IRequestExtended} from '../../interfaces';
import {ICourse} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {courseService} from '../../services';

class CourseController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const course = req.body as ICourse;

      await courseService.create(course);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.course as ICourse;
      const updateFields = req.body as ICourseUpdateFields;

      await courseService.update(id, updateFields);

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
      const params = req.query as ICourseParams;

      const courses = await courseService.getAll(params);

      res.json({
        data: courses
      });

    } catch (error) {
      next(error);
    }
  }

  async getById(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.course as ICourse;

      const course = await courseService.getById(id);

      res.json({
        data: course
      });

    } catch (error) {
      next(error);
    }
  }
}

export const courseController = new CourseController();
