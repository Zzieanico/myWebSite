git add . - добавляет изменения в файлах
git status - дает понимание, какие файлы были изменены, добавлены или удалены. Но не сделан коммит.
git commit -m "Описание изменений" - фиксирует изменения в репозитории. Сохраняет их в историю.
git log - выводит всю историю коммитов. Кто, что, когда изменил.
git show - дает информацию о конкретном коммите. Дата, автор, что изменилось.
git diff - разница между текущими изменениями и последним коммитом. Показывает, что именно изменилось в файлах.
git restore - отменяет все изменения в файлах, возвращает к состоянию последнего коммита.
git rm - удаляет файлы из Git, а так же из рабочей папки в случае необходимости.
git reset - отменяет все коммиты и возвращает проект к более раннему этапу.
git branch - показывает список веток.
git branch "имя ветки" - создаем новую ветку.
git branch -d "имя ветки" - удаляем ветку с названием.
git pull - переносит актуальные изменения с гита на наш репозиторий. Желательно находится на главной ветке в момент выполнения.
git push - отправляет изменения в удаленный репозиторий. Работает только после коммита.
git help -а - показывает все доступные команды Git.
git clone url - cкопировать/склонировать удалённый репозиторий
Понятие репозитория, структура проекта.

Структура проекта

project/ # Корневая папка проекта
│
├── .git/ # Скрытая папка с данными Git (история, настройки)
│
├── src/ # Исходный код (например, main.py, index.js)
├── docs/ # Документация (README.md, API-описание)
├── tests/ # Тесты (unit-тесты, интеграционные тесты)
├── config/ # Файлы конфигурации (настройки сервера, БД)
├── assets/ # Ресурсы (изображения, шрифты)
│
└── .gitignore # Файл, указывающий, какие файлы Git должен игнорировать

Основные элементы:

- .git/ — служебная папка Git (нельзя удалять!).
- README.md — описание проекта (обычно в корне).
- .gitignore — список файлов, которые Git не отслеживает
Жизненный цикл файлов в Git

Файлы в Git проходят несколько стадий:

Неотслеживаемые (Untracked) — Git о них не знает.
Изменённые (Modified) — файлы, которые уже в репозитории, но были изменены.
Индексированные (Staged) — файлы, подготовленные к коммиту (git add).
Зафиксированные (Committed) — изменения сохранены в репозитории (git commit).
Важные правила

Коммиты должны быть атомарными — каждое изменение логически завершённое.

.gitignore обязателен — чтобы не засорять репозиторий ненужными файлами.
README.md — лицо проекта — должен содержать описание, установку и использование.
Конфиг Prettier

Форматировать документ: shift + alt + f 

Максимальное количество символов на одной строке

"printWidth": 80,  
Использовать символы табуляции для отступов

"useTabs": true,
Ширина отступа при табуляции (количество пробелов)

"tabsWidth": 2,
Использовать точки с запятой в конце выражений JS

"semi": true, 
Использовать одинарные кавычки или двойные

"singleQuote": true,
Правила подстановки завершающей запятой

1. none - не добавлять финальную запятую 
2. es5 - добавит запятую там, где это допустимо
3. all - везде, где синтаксис позволяет
"trailingComma": "es5",
Оставлять ли пустое пространство внутри квадратных или круглых скобках

"bracketSpacing": true,
Включать ли аргументы функции в круглые скобки

1. always - всегда
2. aviod - избегать круглых скобок при одном аргументе 
"arrowParens ": "always",
