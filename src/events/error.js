const fetch = require('node-fetch');

const onError = async (error) => {
  console.log(error);
  
  await fetch(process.env.DISCORD_HOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "content": "@everyone Um erro ocorreu em seu bot.",
      "embeds": [
        {
          "title": "Error",
          "description": error,
          "color": 13053486
        }
      ],
      "attachments": []
    })
  })

}

module.exports = {
  onError
}