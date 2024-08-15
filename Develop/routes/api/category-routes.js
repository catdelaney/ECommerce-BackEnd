const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
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
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [
        {model: Product},
      ]
    });
    res.json(categoryData);
  } catch (error) {
    res.json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new category
try {
  const categoryData = await Category.create(req.body);
  res.json(categoryData);
} catch (error) {
  res.json(error);
}
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
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
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
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
});

module.exports = router;
