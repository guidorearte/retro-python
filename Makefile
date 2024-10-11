all:
	@echo ""
	@echo "Comandos:"
	@echo ""
	@echo "  make ejecutar"
	@echo "  make compilar"
	@echo "  make nwjs"
	@echo ""


ejecutar:
	parcel serve index.html --open

compilar:
	rm -rf dist
	mkdir dist
	cp utils/package.json dist/
	parcel build index.html editor.html --no-cache --dist-dir dist

nwjs:
	open -a "nwjs" --args $(realpath dist)
