export class MockChampionship {
	list(): any[] {
		return [{ local: "Barcelona", visit: "Madrid", localGoal: 0, visitGoal: 0, matchDate: new Date() },
			   { local: "Valencia", visit: "Atletic", localGoal: 0, visitGoal: 0, matchDate: new Date() }];
	}
}
