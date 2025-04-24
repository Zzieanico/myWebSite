let getTodosFromJSONlaceholder = async () => {
 try {
  console.log('Начало запроса');

  let response = await fetch(
   'https://jsonlaceholder.typicode.come/todos/10'
  );

  if (!response.ok) console.log('Ошибка');
  
  let data = await response.json();

  console.log('Наши данные: ', data);
 } catch (error) {
  console.log('ВОзникла ошибка при запросе: ', error);
 } finally {
  console.log('Запрос завершился');
 }
};

getTodosFromJSONlaceholder()