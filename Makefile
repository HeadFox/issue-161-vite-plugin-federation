init:
	cd webpack-remote-project && npm install
	cd vite-host-project && npm install
	cd webpack-host-project && npm install

run-remote:
	cd webpack-remote-project && npm run preview

run-host-vite:
	cd vite-host-project && npm run preview

run-host-webpack:
	cd webpack-host-project && npm run preview
