import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
  public static async signup(req: Request, res: Response): Promise<void> {
    try {
      const { username, password } = req.body;
      const user = await UserService.createUser(username, password);
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  }

  public static async login(req: Request, res: Response): Promise<void> {
    try {
      const { username, password } = req.body;
      const user = await UserService.login(username, password);
      if (!user) {
        res.status(401).json({ error: 'Invalid username or password' });
        return;
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to login' });
    }
  }
}


