db.createUser(
	{
		user : "apiuser",
		pwd : "5tuipAx4dv",
		roles : [
			{
				role : "readWrite",
				db : "api"
			}
		]
	}
)