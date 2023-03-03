import { PrismaClient } from '@prisma/client';
import { catBreeds, dogBreeds, horseBreeds } from './seedData.js';
const prisma = new PrismaClient();
var Species;
(function (Species) {
    Species["DOG"] = "DOG";
    Species["CAT"] = "CAT";
    Species["HORSE"] = "HORSE";
})(Species || (Species = {}));
async function createBreed(breed, species) {
    return await prisma.breed.create({
        data: {
            breed: breed.toLowerCase(),
            species,
        },
    });
}
async function breedCreator() {
    let dog = dogBreeds.map(async (breed) => {
        await createBreed(breed, Species.DOG);
    });
    let cat = catBreeds.map(async (breed) => {
        await createBreed(breed, Species.CAT);
    });
    let horse = horseBreeds.map(async (breed) => {
        await createBreed(breed, Species.HORSE);
    });
    return {
        dog,
        cat,
        horse,
    };
}
async function userCreator() {
    const user = await prisma.user.create({
        data: {
            name: 'Dragons Den',
            email: 'agency-1@email.com',
            type: 'AGENCY',
            password: '123',
            username: 'dragonsden',
        },
    });
    const userProfile = await prisma.userProfile.create({
        data: {
            bio: 'Dragons Den pet adoption agency',
            userId: user.id,
        },
    });
    const ham = await prisma.pet.create({
        data: {
            name: 'ham',
            species: 'DOG',
            agencyId: user.id,
        },
    });
    const tornado = await prisma.pet.create({
        data: {
            name: 'tornado',
            species: 'CAT',
            agencyId: user.id,
        },
    });
    const spinach = await prisma.pet.create({
        data: {
            name: 'spinach',
            species: 'CAT',
            agencyId: user.id,
        },
    });
    // cant add breeds to seed pets without some logic here,
    // this is because there are no breeds that exist yet,
    // we need to get an id from the breeds after they're created and then run our user creator function
}
async function main() {
    await breedCreator();
    await userCreator();
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
