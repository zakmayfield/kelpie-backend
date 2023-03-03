
export const typeDefs = /* GraphQL */ `
  type Query {
    getPets: [Pet]!
  }

  type Address {
    id: String!
    address: String!
    apartment: String
    city: String!
    state: String!
    zip: Int!
    country: String!
    userProfile: UserProfile
    volunteer: [Volunteer]
  }

  type Contact {
    id: String!
    phone: String
    email: String
    userProfile: UserProfile
  }

  type AuthPayload {
    user: AuthUser
    token: String
  }

  type AuthUser {
    id: String!
    name: String!
    email: String!
    username: String
    type: String!
  }

  type User {
    id: String!
    name: String!
    email: String!
    username: String
    type: AccountType!
    profile: UserProfile
    pets: [Pet]
    savedPets: [UsersToPets]
    volunteers: [Volunteer]
  }

  type UserProfile {
    id: String!
    bio: String
    address: [Address]
    contact: [Contact]
    user: User
  }

  enum AccountType {
    DEFAULT
    VOLUNTEER
    AGENCY
  }

  type Volunteer {
    id: String!
    name: String!
    email: String!
    address: Address

    agency: User
  }

  type UsersToPets {
    user: User
    # i was missing the pet prop here and it was throwing a very small isolated error that i couldn't locate -- gotcha
    pet: Pet
  }

  type Pet {
    id: String!
    name: String!
    species: Species!
    location: String
    breed: [BreedsToPets]
    savedBy: [UsersToPets]
    profile: PetProfile
    agency: User
  }

  enum Species {
    CAT
    DOG
    BIRD
    HORSE
    FISH
    REPTILE
    BARNYARD
  }

  type BreedsToPets {
    breed: Breed
    pet: Pet
  }

  type Breed {
    id: String!
    breed: String!
    species: Species!
    pets: [BreedsToPets]
  }

  type PetProfile {
    id: String!
    age: Int
    bio: String
    weight: Int
    birthday: String
    isFixed: Boolean
    isAdopted: Boolean!
    isAvailable: Boolean!
    isHouseTrained: Boolean
    isVaccineCurrent: Boolean

    sex: Sex
    coat: Coat
    diet: Diet
    color: Color
    goodWith: GoodWith
    personality: Personality

    images: [ImagesToPetProfiles]
    pet: Pet
  }

  type ImagesToPetProfiles {
    image: Image
    petProfile: PetProfile
  }

  type Image {
    id: String!
    url: String
    file: String
    thumbnail: String

    pets: [ImagesToPetProfiles]
  }

  enum Sex {
    UNKNOWN
    FEMALE
    MALE
  }

  enum Color {
    UNKNOWN
    BLACK
    WHITE
    BROWN
    GOLDEN
    SPOTTED
    BRINDLE
  }

  enum Personality {
    UNKNOWN
    ACTIVE
    CURIOUS
    GOOFY
    HYPER
    LAZY
    LONER
  }

  enum Diet {
    STANDARD
    MEDICAL
    WEIGHT
  }

  enum Coat {
    UNKNOWN
    SHORT
    MEDIUM
    LONG
    NONE
  }

  enum GoodWith {
    UNKNOWN
    CATS
    DOGS
    CHILDREN
    CATS_AND_DOGS
    ALL
  }
`;
