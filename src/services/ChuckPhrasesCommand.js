const { getUrl } = require('../utils/getUrl');
const Service = require('../Service');

class ChuckPhrasesCommand extends Service {
  constructor() {
    super();
    this.command = '!chuck';
  }

  async execute({ context, client }) {
    const { from } = context;
    const data = await getUrl('https://api.chucknorris.io/jokes/random');
    await client.sendText(from, `${data.value}`);
  }
}

module.exports = ChuckPhrasesCommand;
