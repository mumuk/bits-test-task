import IFeedback from '../src/interfaces/IFeedback';

const feedbacksMock: Array<IFeedback> = [
  {
    id: 'f001',
    productId: '001',
    rating: 4,
    createdAt: new Date(),
    createdBy: 'Someone 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium asperiores at aut culpa cum delectus dolor doloremque ducimus enim expedita harum illo labore molestias mollitia natus nemo nesciunt nobis perferendis, placeat possimus quae quia quibusdam rem repudiandae saepe, sed tenetur velit vitae voluptatum! Ab aspernatur atque autem beatae, ducimus enim facere facilis fugiat in ipsa magni molestiae mollitia nam nostrum optio quaerat quia quo repudiandae rerum sapiente sunt veritatis voluptatibus? Aliquid, aut consequuntur deserunt dolorum illum iusto laboriosam necessitatibus nihil nobis repellat, repellendus sint suscipit veritatis? Alias cupiditate, modi? Commodi culpa delectus incidunt maxime minima neque.',
    reviews: 12,
  },
  {
    id: 'f002',
    productId: '001',
    rating: 4,
    createdAt: new Date(),
    createdBy: 'Someone 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium asperiores at aut culpa cum delectus dolor doloremque ducimus enim expedita harum illo labore molestias mollitia natus nemo nesciunt nobis perferendis, placeat possimus quae quia quibusdam rem repudiandae saepe, sed tenetur velit vitae voluptatum! Ab aspernatur atque autem beatae, ducimus enim facere facilis fugiat in ipsa magni molestiae mollitia nam nostrum optio quaerat quia quo repudiandae rerum sapiente sunt veritatis voluptatibus? Aliquid, aut consequuntur deserunt dolorum illum iusto laboriosam necessitatibus nihil nobis repellat, repellendus sint suscipit veritatis? Alias cupiditate, modi? Commodi culpa delectus.',
    reviews: 16,
  },
  {
    id: 'f003',
    productId: '002',
    rating: 5,
    createdAt: new Date(),
    createdBy: 'Someone 1',
    text: 'lLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium asperiores at aut culpa cum delectus dolor doloremque ducimus enim expedita harum illo labore molestias mollitia natus nemo nesciunt nobis perferendis, placeat possimus quae quia quibusdam rem repudiandae saepe, sed tenetur velit vitae voluptatum! Ab aspernatur atque autem beatae, ducimus enim facere facilis fugiat in ipsa magni molestiae mollitia nam nostrum optio quaerat quia quo repudiandae rerum sapiente .',
    reviews: 5,
  },
  {
    id: 'f004',
    productId: '002',
    rating: 2.5,
    createdAt: new Date(),
    createdBy: 'Someone 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium asperiores at aut culpa cum delectus dolor doloremque ducimus enim expedita harum illo labore molestias mollitia natus nemo nesciunt nobis perferendis, placeat possimus quae quia quibusdam rem repudiandae saepe, sed tenetur velit vitae voluptatum! Ab aspernatur atque autem beatae, ducimus enim facere facilis fugiat in ipsa magni molestiae mollitia nam nostrum optio quaerat quia quo repudiandae rerum sapiente sunt veritatis voluptatibus? Aliquid, aut consequuntur deserunt dolorum illum iusto laboriosam necessitatibus nihil nobis repellat, repellendus.',
    reviews: 7,
  },
  {
    id: 'f005',
    productId: '002',
    rating: 3.7,
    createdAt: new Date(),
    createdBy: 'Someone 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium asperiores at aut culpa cum delectus dolor doloremque ducimus enim expedita harum illo labore molestias mollitia natus nemo nesciunt nobis perferendis, placeat possimus quae quia quibusdam rem repudiandae saepe, sed tenetur velit vitae voluptatum! Ab aspernatur atque autem beatae, ducimus enim facere facilis fugiat in ipsa magni molestiae mollitia nam nostrum optio quaerat quia quo repudiandae rerum sapiente sunt veritatis voluptatibus? Aliquid, aut consequuntur deserunt dolorum illum iusto laboriosam necessitatibus nihil nobis repellat, repellendus sint suscipit veritatis? Alias cupiditate, modi? Commodi culpa delectus incidunt maxime minima neque nostrum officiis similique.',
    reviews: 23,
  },
];

export default feedbacksMock;
