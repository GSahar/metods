// TODO: write your code here
import Bowerman from './Bowerman';
/*import Daemon from './Daemon';
import Magician from './Magician';
import Swordsman from './Swordsman';
import Undead from './Undead';
import Zombie from './Zombie';*/


try {
    const bowerman = new Bowerman('Andy', 'Bowerman');
    console.log(bowerman);
    bowerman.levelUp();
    bowerman.damage(1000);
    bowerman.levelUp();
} catch (err) {
    console.log(`Ошибка ${err.name}: ${err.message}`);
}