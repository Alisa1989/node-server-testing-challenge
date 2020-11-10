const supertest = require("supertest")
const server = require("../server")
const db = require("../data/config")

beforeEach(async () => {
    await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})


describe("vehicles integration tests", () => {
    it("gets a list of vehicles", async () => {
        const res = await supertest(server).get("/vehicles")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body).toHaveLength(2)
        expect(res.body[0].model).toBe("Prius")
    })

    it("creates a new vehicle", async() => {
        const res = await supertest(server)
            .post("/vehicles")
            .send({ model: "Jeffrey", make:"Epstein", year: "2019", description: "Did not kill himself" },)
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.model).toBe("Jeffrey")
        expect(res.body.id).toBeDefined()
    })

    it("deletes a vehicle", async() => {
        const res = await supertest(server).delete("/vehicles/2")
        expect(res.statusCode).toBe(200)
        expect(res.body.message).toBe("Vehicle deleted successfully.")

    })
})