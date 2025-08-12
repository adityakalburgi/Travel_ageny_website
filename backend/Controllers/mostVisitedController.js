import Tour from '../models/Tour.js';

export const getMostVisitedTours = async (req, res) => {
   try {
      const mostVisitedTours = await Tour.find().sort({ visitCount: -1 }).limit(9);
      res.status(200).json(mostVisitedTours);
   } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to fetch most visited tours' });
   }
};
