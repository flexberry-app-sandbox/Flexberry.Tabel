docker build --no-cache -f SQL\Dockerfile.PostgreSql -t tabel-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t tabel-java/app ../../..
