# typeorm
This command only creates a file with boiler plate having up and down method.

    npx tsx typeorm migration:create <file name with path to be created>
    Example : npx tsx ./node_modules/typeorm/cli.js migration:generate src/migrations/InitSchema -d src/data-source.ts

To generate initial InitialSchema as well as it has been used to create pending schema

    npx tsx ./node_modules/typeorm/cli.js migration:generate src/migrations/<InitSchema> -d src/data-source.ts

To run migration 

    npx tsx ./node_modules/typeorm/cli.js migration:run -d src/data-source.ts

To revert migrations

    npx tsx ./node_modules/typeorm/cli.js migration:revert -d src/data-source.ts

To shiw migrations

    npx tsx ./node_modules/typeorm/cli.js migration:show -d src/data-source.ts