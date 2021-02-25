const CHANNEL_OWNER = "paulorievrs_dev"
const { exec } = require("child_process");

module.exports  = {

    async brb(Bot, chatter) {

        await Bot.say("Comando desativado");
        return;

        let brb = true;
        if(chatter.username === CHANNEL_OWNER) {
            if(brb) {
                fs.writeFileSync('C:\\Users\\Paulo\\Desktop\\Stream txt\\brb.txt', "");
                brb = !brb;
                await Bot.say("O PATRÃO VOLTOU");

            } else {
                fs.writeFileSync('C:\\Users\\Paulo\\Desktop\\Stream txt\\brb.txt', "Vou pegar água, já volto!");
                brb = !brb;
                shell.exec('brb.bat')
                await Bot.say("O PATRÃO JÁ VOLTA GALERA");
            }
        }

    },

    async commercial(Bot, chatter) {
        if (chatter.user_type === 'mod' || chatter.username === CHANNEL_OWNER) {
            await Bot.say("!commercial 30");
        }
    },

    async commands(Bot) {

        await Bot.say("!discord, !github, !instagram, !twitter, !uptime, !color");
    },

    async discord(Bot) {
        await Bot.say('/me Venha para o Discord da He4rt Developers: https://discord.io/he4rt');
    },

    async github(Bot) {
        await Bot.say('Meus repositórios: https://github.com/paulorievrs');
    },

    async instagram(Bot) {
        await Bot.say('Me siga no instagram: https://instagram.com/paulorievrs_dev');
    },

    async joy(Bot) {
        await Bot.say("A melhor namorada do mundo, ela faz lives de CS:GO https://instagram.com/joyumee");
    },

    async color(Bot, chatter, parameter) {

        if(parameter && parameter.indexOf('#') !== -1) {
            parameter = parameter.split('#')[1];
        }

        if(parameter) {
            exec('cd /home/rievrs && php yeelight color ' + parameter, (error, stdout, stderr) => {
                if (error) {
                    Bot.say("Mano deu um erro cabuloso aí, resolve");
                    return;
                }
                
            });
        } else {
            Bot.say("Enton, coloca !color e uma cor (em hex é melior) aí que minha lâmpada muda de cor, é nois");
        }

    }

}