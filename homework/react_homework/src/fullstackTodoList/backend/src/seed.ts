import mongoose from 'mongoose';
import TodoModel from './models/todo';

const seedTodos = [
  {
    task: 'Learn TypeScript',
    completed: false,
    date: new Date(),
  },
  {
    task: 'Build a Todo App',
    completed: false,
    date: new Date(),
  },
  {
    task: 'Write tests',
    completed: false,
    date: new Date(),
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/todoapp');
    console.log('Connected to MongoDB');

    // Clear existing data
    await TodoModel.deleteMany({});

    // Insert seed data
    await TodoModel.insertMany(seedTodos);

    console.log('Database seeded with initial data');
    mongoose.disconnect();
  } catch (err) {
    console.error('Error seeding database', err);
    mongoose.disconnect();
  }
};

seedDatabase();
