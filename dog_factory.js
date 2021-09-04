/****************************************************************************************************
*** File Name:      dog_factory.js
*** Description:    JavaScript to create a factory function for dogs
*** Author:         Trevor Carson
*** Date:           2021-09-04
*****************************************************************************************************/

// Factory function to create dog objects
const dogFactory = (name, breed, weight) => {
    return {
        _name: name,                                    // Parameter to hold dogs name
        _breed: breed,                                  // Parameter to hold dogs breed
        _weight: weight,                                // Parameter to hold dogs weight
        get name() { return this._name },               // Getter function to return dogs name
        get breed() { return this._breed },             // Getter function to return dogs breed
        get weight() { return this._weight },           // Getter function to return dogs weight
        set name(name) { this._name = name },           // Setter function dogs name
        set breed(breed) { this._breed = breed },       // Setter function dogs breed
        set weight(weight) { this._weight = weight },   // Setter function dogs weight
        bark() { return "ruff! ruff!" },                // Function for dogs sound
        eatTooManyTreats() { this._weight++ }           // Function for adding weight when dog eats a treat
    }
};
