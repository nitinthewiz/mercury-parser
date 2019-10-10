export const FeedbinComExtractor = {
  domain: 'feedbin.com',

  title: {
    selectors: ['h1'],
  },

  author: {
    selectors: ['.page-meta > :not(time)'],
  },

  date_published: {
    selectors: [['time[datetime]', 'datetime']],
  },

  dek: null,

  lead_image_url: {
    selectors: ['main img'],
  },

  content: {
    selectors: [
      // enter content selectors
    ],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [],
  },
};
