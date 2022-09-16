
const notes = [{
  title: "My Next Trip",
  body: "I would like to go to spain"
},{
  title: "I Want To Blackmail And Fuck You",
  body: "I get turned on by strange / deviant things i think. This is why i don't think I'll ever truly live my fantasy, I'm pretty incapable of doing this to somebody. Especially after being hacked for so long, it's really turned me into a much better person, but i seriously lack any form of privacy and that makes me sad."
},{
  title: "Stop letting these guys anal rape and destroy 16 year olds lives on camera and embarrassing their families.",
  body: "This group of people murdered my family and stole their life insurance monies. Sinc then to get out of trouble they started this game i geuss you could say. Well, a lot of younger girls want to meet me because I go around helping people and finding missing girls in their neighborhood. Because of the people around me and their help, i feel like sometimes i can provide a feeling of comfort for younger people who are vulnerable to coercion especially. Well, i don't switch out but this person who enjoys spreading herpes and hiv plans the girl to see me, then waits for me to leave, blinmdfolds her brings her to my room and the guy who switches in into my spot (who also goes back to florida or california after raping a female) holds her down, videotapes her inserting his penis into her ass (shes 16 hes 30) and ignores her pleas saying she is acting and rapes her, knowing she is crying, knowing she was expecting someone who looks out for her that she is comfortable with. All this to try to frame up a 30 year old man who has done nothing to anybody. Stop spreading your hiv to these girls, they werent playing either. Thats 4 females you and your buddies who also dislike me have helped rape / kill in some situations. You're now on my kill-list, and one more time and your buddies will be to. Stay in Florida, California or Harrisburgh. And stop using my good reputation to anal rape victims who already have a tough life. You owe restitution."
},{
  title: "Why i give out phones and pepper spray",
  body: "I give these things out so these girls have a fighting chance. I give out 2-3 phones or pepper sprays while im in kensington, i try to everytime im down there. Once people hear that someone is getting rewarded for doing these things, everyone else does it for a day or two, but mainly the guy stealing my identity since 2013 does it. He acted skitzophrenic and like he was shitting himself for a couple weeks, but i know its not him. I hope to god someone stops using my best friends image and reputation to coerce and steal and keep his image in-tact because the person doing this is not him."
}
]


/**
Find Todos
 */
 
const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

const note = findNote(notes, 'Why i give out phones and pepper spray')
console.log(note)



const todos = [
  {title: "one todo",
  text: "one todo this is todo one text"},
  {title: "two todo",
  text: "two todo text stuff"}
]

/**
Delete Todos
 */
 
 const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase()
  })
  
  if(index > -1) {
    todos.splice(index,1)
  }
 }
 
 deleteTodo(todos, 'one todo')
 console.log(todos)
