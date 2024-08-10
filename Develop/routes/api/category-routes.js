const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
try {
  const categoriesData = await Category.findAll({
    include: {
      model: Product
    }
  });
  res.json(categoriesData);
} catch (error) {
  res.json(error);
}
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findbyPk(req.params.id, {
      include: {
        model: Product
      }
    });
    res.json(categoryData);
  } catch (error) {
    res.json(error);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
try {
  const categoryData = await Category.create(req.body);
  res.json(categoryData);
} catch (error) {
  res.json(error);
}
  // create a new category
});

router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(
      req.body,{
        where: {
          id: req.params.id
        }
      }
    )
    res.json(updatedCategory);
  } catch (error) {
    res.json(error);
  }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(deleteCategory);
  } catch (error) {
    res.json(error);
  }
  // delete a category by its `id` value
});

module.exports = router;
