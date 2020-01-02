const router = require("express").Router()
const Properties = require('./properties-model.js')

router.get('/',(req,res) => {
    Properties.getProperties()
    .then(property => {
        res.status(200).json(property);
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.get('/:id',(req,res) => {
    Properties.getPropertyById()
    .then(property => {
        if(property){
            res.status(200).json(property);
        }
        else{
            res.status(404).json({ message: 'property id not found' });
        }
        
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.post('/',  (req, res) => {

    if(req.body.title && req.body.street_address && req.body.city && req.body.state &&
        req.body.zipcode && req.body.purchase_price && req.body.estimated_repair_costs && req.body.after_repair_value &&
        req.body.closing_costs && req.body.use_financing && req.body.gross_monthly_rent && req.body.other_monthly_income &&
        req.body.monthly_fixed_expenses && req.body.monthly_variable_expenses && req.body.annual_property_value_growth && 
        req.body.annual_income_growth && req.body.annual_expenses_growth && req.body.sales_expense
        ){

            Properties
        .addProperty(req.body)
        .then(id => {
            res.status(201).json(id);
        })
        .catch(error => {
            res.status(500).json(error);
        }

        )}
        else{
            res.status(404).json({ message: 'Please enter all the required fields' });
        }
})

router.put('/:id', (req, res) => {

    Properties
        .update(req.params.id, req.body)
        .then(count => {
            if (count > 0) {
                res.status(201).json(count);
            }
            else {
                res.status(404).json({ message: 'property id not found' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        })
});

router.delete('/:id',(req, res) => {

    Properties
        .remove(req.params.id)
        .then(count => {
            if (count > 0) {
                res.status(201).json(count);
            }
            else {
                res.status(404).json({ message: 'property id not found' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

module.exports = router