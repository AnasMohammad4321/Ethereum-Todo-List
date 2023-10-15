pragma solidity ^0.5.0;

contract TodoList {
    uint public taskCount = 0;
    mapping(uint => Task) public tasks;

    struct Task {
        uint id;
        string content;
        bool completed;
    }

    constructor() public {
        createTask("Sample Task");
    }

    function createTask(string memory _content) public {
        taskCount ++;
        tasks[taskCount] = Task(taskCount, _content, false);

    }
}

