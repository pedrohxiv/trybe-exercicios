from linked_list_content import LinkedList


class Stack:
    def __init__(self):
        self.__data = LinkedList()

    def __str__(self):
        return f"{self.__data}"

    def push(self, value):
        self.__data.insert_last(value)

    def pop(self):
        return self.__data.remove_last()

    def peek(self):
        return self.__data.get_element_at(len(self.__data))

    def is_empty(self):
        return not len(self.__data)

    def min_value(self):
        if self.is_empty():
            return None
        min_value = self.__data.get_element_at(0).value
        array = []
        current_node = self.__data.head_value
        while current_node:
            array.append(current_node.value)
            current_node = current_node.next
        for elem in array:
            if elem < min_value:
                min_value = elem
        return min_value
    # Complexidade O(n)


if __name__ == "__main__":
    elements = [2, 1, 5, 4, 10, 6, 8, 22, 11, 10]
    content_stack = Stack()

    for elem in elements:
        content_stack.push(elem)

    print(content_stack.min_value())
    content_stack.push(-5)

    print(content_stack.min_value())
