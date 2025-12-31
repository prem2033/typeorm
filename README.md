# typeorm
This command only creates a file with bioler plate having up and down method.

    npx tsx typeorm migration:create <file name with path to be created>
    Example : npx tsx ./node_modules/typeorm/cli.js migration:generate src/migrations/InitSchema -d src/data-source.ts

to generate initial InitialSchema as well as it has been used to create pending schema

    npx tsx ./node_modules/typeorm/cli.js migration:generate src/migrations/<InitSchema> -d src/data-source.ts
