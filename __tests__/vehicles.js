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

    // it("gets a single hoobit from id", async () => {
    //     const res = await supertest(server).get("/hobbits/2")
    //     expect(res.statusCode).toBe(200)
    //     expect(res.type).toBe("application/json")
    //     expect(res.body.id).toBe(2)
    //     expect(res.body.name).toBe("frodo")
    // })

    // it("it return an error for hobbit that doesn't exist", async () => {
    //     const res = await supertest(server).get("/hobbits/50")
    //     expect(res.statusCode).toBe(404)
    // })

    // it("creates a new hobbit", async() => {
    //     const res = await supertest(server)
    //         .post("/hobbits")
    //         .send({name: "bilbo"})
    //     expect(res.statusCode).toBe(201)
    //     expect(res.type).toBe("application/json")
    //     expect(res.body.name).toBe("bilbo")
    //     expect(res.body.id).toBeDefined()
    // })
})