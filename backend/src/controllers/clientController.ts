import { Request, Response } from 'express';
import Client from '../models/Client';

export const getClients = async (req: Request, res: Response) => {
  try {
    const clients = await Client.find({ createdBy: req.user.id })
      .sort({ createdAt: -1 });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getClient = async (req: Request, res: Response) => {
  try {
    const client = await Client.findOne({
      _id: req.params.id,
      createdBy: req.user.id
    });
    
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const createClient = async (req: Request, res: Response) => {
  try {
    const client = new Client({
      ...req.body,
      createdBy: req.user.id
    });
    
    await client.save();
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateClient = async (req: Request, res: Response) => {
  try {
    const client = await Client.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user.id },
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    );
    
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteClient = async (req: Request, res: Response) => {
  try {
    const client = await Client.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user.id
    });
    
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    
    res.json({ message: 'Client deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};