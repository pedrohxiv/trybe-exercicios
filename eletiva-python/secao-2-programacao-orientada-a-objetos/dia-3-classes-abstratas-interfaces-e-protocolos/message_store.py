from typing import Protocol, Tuple, Union
from queue import Queue


class MessagingProtocol(Protocol):
    def send_message(self, to: str, message: str) -> bool:
        pass

    def receive_message(self) -> Union[Tuple[str, str], None]:
        pass


class InMemoryMessaging(MessagingProtocol):
    def __init__(self) -> None:
        self.messages: Queue[Tuple[str, str]] = Queue()

    def send_message(self, to: str, message: str) -> bool:
        self.messages.put((to, message))
        return True

    def receive_message(self) -> Union[Tuple[str, str], None]:
        if self.messages.empty():
            return None
        return self.messages.get()


class FileMessaging(MessagingProtocol):
    def __init__(self, filename: str) -> None:
        self.filename = filename

    def send_message(self, to: str, message: str) -> bool:
        with open(self.filename, "a") as f:
            f.write(f"{to}:{message}\n")
        return True

    def receive_message(self) -> Union[Tuple[str, str], None]:
        with open(self.filename, "r") as f:
            lines = f.readlines()
        if not lines:
            return None
        line = lines[0]
        with open(self.filename, "w") as f:
            f.writelines(lines[1:])
        return line.split(":")[0], line.split(":")[1]


def main():
    in_memory_messaging = InMemoryMessaging()
    file_messaging = FileMessaging("messages.txt")

    in_memory_messaging.send_message("User1", "Hello, User2")
    in_memory_messaging.send_message("User1", "How are you?")
    in_memory_messaging.send_message("User1", "Good morning!")

    file_messaging.send_message("User2", "Hi, User1")
    file_messaging.send_message("User2", "Im fine!")
    file_messaging.send_message("User2", "And you?")

    print(in_memory_messaging.receive_message())
    print(in_memory_messaging.receive_message())
    print(in_memory_messaging.receive_message())

    print(file_messaging.receive_message())
    print(file_messaging.receive_message())
    print(file_messaging.receive_message())


if __name__ == "__main__":
    main()
