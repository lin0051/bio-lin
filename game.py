import random

def get_computer_choice():
    """Компьютер выбирает случайный ход"""
    choices = ['камень', 'ножницы', 'бумага']
    return random.choice(choices)

def determine_winner(player_choice, computer_choice):
    """Определяет победителя"""
    if player_choice == computer_choice:
        return "Ничья!"
    
    if player_choice == 'камень':
        if computer_choice == 'ножницы':
            return "Вы выиграли! 🎉"
        else:
            return "Компьютер выиграл 🤖"
    
    elif player_choice == 'ножницы':
        if computer_choice == 'бумага':
            return "Вы выиграли! 🎉"
        else:
            return "Компьютер выиграл 🤖"
    
    elif player_choice == 'бумага':
        if computer_choice == 'камень':
            return "Вы выиграли! 🎉"
        else:
            return "Компьютер выиграл 🤖"

def play_game():
    """Основной цикл игры"""
    print("=" * 40)
    print("  Добро пожаловать в игру!")
    print("  Камень, ножницы, бумага")
    print("=" * 40)
    
    score_player = 0
    score_computer = 0
    
    while True:
        print(f"\nВаш счёт: {score_player} | Компьютер: {score_computer}")
        print("\nВыберите:")
        print("1. Камень")
        print("2. Ножницы")
        print("3. Бумага")
        print("4. Выход")
        
        choice = input("\nВаш выбор (1-4): ").strip()
        
        choice_map = {
            '1': 'камень',
            '2': 'ножницы',
            '3': 'бумага'
        }
        
        if choice == '4':
            print("\n" + "=" * 40)
            print(f"Финальный счёт: Вы {score_player} : {score_computer} Компьютер")
            print("Спасибо за игру! До встречи! 👋")
            print("=" * 40)
            break
        
        if choice not in choice_map:
            print("❌ Некорректный выбор! Попробуйте снова.")
            continue
        
        player_choice = choice_map[choice]
        computer_choice = get_computer_choice()
        
        print(f"\nВы выбрали: {player_choice}")
        print(f"Компьютер выбрал: {computer_choice}")
        
        result = determine_winner(player_choice, computer_choice)
        print(result)
        
        # Обновляем счёт
        if "Вы выиграли" in result:
            score_player += 1
        elif "Компьютер выиграл" in result:
            score_computer += 1

if __name__ == "__main__":
    play_game()
