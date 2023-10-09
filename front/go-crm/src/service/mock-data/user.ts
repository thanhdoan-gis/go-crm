import { User } from "@/model";

const users:User[] = [
	{
		"id": "B977DA7B-D93B-EE3B-348C-5EE6BABC4F87",
		"name": "Brennan Finley",
		"email": "admin1@gocrm.com",
		"username": "admin1",
		"password": "P@ssw0rd",
		"isAdmin": true,
		"agentId": "0E78A5AF-9E81-47FC-8963-169246D1E13C",
		"phone": "(671) 762-2570"
	},
	{
		"id": "8B3C14DD-2199-7BD7-C45B-181D7AD39C7E",
		"name": "Candice Pacheco",
		"email": "agent1user@gocrm.com",
		"username": "agent1user",
		"password": "P@ssw0rd",
		"isAdmin": false,
		"agentId": '1A473D77-8E53-6B3C-78CE-08D4D635E2EE',
		"phone": "(257) 277-4866"
	},
	{
		"id": "4E75C6B8-4B88-311A-EC31-7EB56528FA59",
		"name": "Rina Orr",
		"email": "agent2user@gocrm.com",
		"username": 'agent2user',
		"password": "P@ssw0rd",
		"isAdmin": false,
		"agentId": "4C5E9479-BE34-4CDB-777B-B1D346C0C112",
		"phone": "1-321-310-9443"
	}
];

export default users
