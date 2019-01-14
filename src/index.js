import app from './core/app';

const startApp = async () => {
  try {
    app.listen(3000, () => console.log(`Server Running http://localhost:3000`));
  } catch (error) {
    console.error(`Error occured ${error}`);
  }
};

startApp();
