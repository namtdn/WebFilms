const Genre = require('./Genre');

class GenreRepository {
    constructor(knex) {
        this.knex = knex;
    }

    async getAllGenre() {
        let genreList = await this.knex.select('*').from('genres');
        return genreList.map(allGenre => this.factoryGenre(allGenre));
    }

    async findGenreById(id) {
        let rawGenre = await this.knex.select('*').from('genres').where('id', id);

        if(rawGenre.length) {
            return this.factoryGenre(rawGenre[0]);
        }

        return null;
    }

    async add(data) {
        let addGenre = await this.knex('genres').insert(data);
        return addGenre;
    }

    async update(data, id) {
        let updateGenre = await this.knex('genres').where('id', id).update(data);
        return updateGenre;
    }

    async delete(id) {
        let deleteGenre = await this.knex('genres').where('id', id).delete();
        return deleteGenre;
    }

    factoryGenre(allGenreData) {
        return new Genre(allGenreData.id, allGenreData.name);
    }
}

module.exports = GenreRepository;