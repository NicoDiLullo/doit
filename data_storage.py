# may eventually change to not python oops
#have to do flask stuff later
#https://learn.microsoft.com/en-us/visualstudio/ide/quickstart-python?view=vs-2022

class toDo():
    def __init__(self, items, dueDate, subTasks, complete, isMaster):
        '''
        items: things to do (text of todo)
        dueDate: when it is due
        subTasks: list of toDo subTasks
        complete = boolean of whether or not it is complete
        '''
        self.items = items
        self.dueDate = dueDate
        self.subTasks = subTasks
        self.complete = complete