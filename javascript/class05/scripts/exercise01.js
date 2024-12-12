let pet = {
    fullName: `Alfie`,
    type: `Doberman`,
    weight: `50`,
    activities: ['sleeping', `running`, `chaos`, `eating`],
    isLazy: false,
    age: 3,
    getFavoriteActivity: function(){
        for(let activity of this.activities){
            return activity;
            
        }
    }
}
console.log(pet.age);
console.log(pet.getFavoriteActivity());

pet.fullName = `Arthur` // menuvanje na property


let trainer = new Object();
trainer.name = `Stefan`;
trainer.lastName = `Stefanovski`
trainer.academy = `Qinshift`
trainer.lecture = `objects`

delete trainer.lecture;
trainer.age = 12;

trainer.getFullName = function() {
    return this.name + this.lastName;
}
    console.log(getFullName(trainer));
    

