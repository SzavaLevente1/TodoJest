const TodoController = require('../controllers/todo.controller')
const TodoModel = require('../models/todo.model')
const httpMocks = require('node-mocks-http')
const newTodo = require('./mock_data/new_todo.json')

TodoModel.create = jest.fn()

let req,res, next

beforeEach(()=>{
     req = httpMocks.createRequest()
     res = httpMocks.createResponse()
     next = null
})



describe('TodoController.createTodo',()=>{
    beforeEach(()=>{
        req.body = newTodo
    })
    it('A createTodo-nak fgv.nek kellene lennie', ()=>{
        expect(typeof TodoController.createTodo).toBe('function')
    })

    it('meg kellene hívni a TodoModel.create metódust', ()=>{
        TodoController.createTodo(req,res,next)
        expect(TodoModel.create).toHaveBeenCalledWith(newTodo) 
    })

    it('A backend 201-es státuszkóddal kellene visszatérjen',()=>{  
        TodoController.createTodo(req,res,next)
        expect(res.statusCode).toBe(201)
        expect(res._isEndCalled()).toBeTruthy()
    })

    it('A válaszban json adatot kellenek kapni',()=>{
        TodoModel.create.mockReturnValue(newTodo)
        TodoController.createTodo(res,res,next)
        expect(res._getJSONData()).toStrictEqual(newTodo)
    })

    
})