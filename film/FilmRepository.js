const Film = require('./Film');

class FilmRepository {
    constructor(knex) {
        this.knex = knex;
    }

    async getAllFilm() {
        let filmList = await this.knex.select('*').from('films');
        return filmList.map(allFilm => this.factoryFilm(allFilm));
    }

    async findFilmById(id) {
        let rawFilm = await this.knex.select('*').from('films').where('id', id);

        if(rawFilm.length) {
            return this.factoryFilm(rawFilm[0]);
        }

        return null;
    }

    async add(data) {
        let addFilm = await this.knex('films').insert(data);
        return addFilm;
    }

    async update(data, id) {
        let updateFilm = await this.knex('films').where('id', id).update(data);
        return updateFilm;
    }

    async delete(id) {
        let deleteFilm = await this.knex('films').where('id', id).delete();
        return deleteFilm;
    }

    factoryFilm(allFilmData) {
        return new Film(allFilmData.id, allFilmData.name, allFilmData.description);
    }
}

module.exports = FilmRepository;
