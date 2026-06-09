describe('Todo Application E2E Tests', () => {

beforeEach(async () => {
await device.launchApp({ newInstance: true });
});

// TC001
it('should display the Todo screen on launch', async () => {

await expect(
  element(by.id('todoScreen'))
).toBeVisible();

await expect(
  element(by.id('todoInput'))
).toBeVisible();

await expect(
  element(by.id('addButton'))
).toBeVisible();

});

// TC002
it('should create a new todo item', async () => {

await element(by.id('todoInput'))
  .typeText('Buy Milk');

await element(by.id('addButton'))
  .tap();

await expect(
  element(by.text('Buy Milk'))
).toBeVisible();

});

// TC003
it('should create multiple todo items', async () => {

await element(by.id('todoInput'))
  .replaceText('Task One');

await element(by.id('addButton'))
  .tap();

await element(by.id('todoInput'))
  .replaceText('Task Two');

await element(by.id('addButton'))
  .tap();

await expect(
  element(by.text('Task One'))
).toBeVisible();

await expect(
  element(by.text('Task Two'))
).toBeVisible();

});

// TC004
it('should mark a todo as completed', async () => {

await element(by.id('todoInput'))
  .replaceText('Complete Me');

await element(by.id('addButton'))
  .tap();

await element(by.text('Complete Me'))
  .tap();

await expect(
  element(by.text('Complete Me'))
).toBeVisible();

});

// TC005
it('should delete a todo item', async () => {

await element(by.id('todoInput'))
  .replaceText('Delete Me');

await element(by.id('addButton'))
  .tap();

await expect(
  element(by.text('Delete Me'))
).toBeVisible();

await element(by.text('Delete'))
  .tap();

await expect(
  element(by.text('Delete Me'))
).not.toExist();

});

});