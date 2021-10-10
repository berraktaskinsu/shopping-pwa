import express from 'express';
import { Book } from '../database/models';

const router = express.Router();

router.get('/', (req, res) => {
  const myBook = { title: 'My Book', price: 13, authors: ['Berrak', 'Aslı'] };
  Book.create(myBook, (err, book) => {
    if (err) res.send('Err');

    // res.status(200).send('API works!');
    res.set('Cache-control', `no-store`);
    res.status(200).json({ success: true, msg: '' });
    // res.redirect(301, '../signup');
    // res.render('<button>Hey</button>'); NOT WORKING (MUST DEFINE AN ENGINE)
  });
});

export default router;
