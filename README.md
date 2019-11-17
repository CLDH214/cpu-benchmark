cpu benchmark on JSON.stringify and its alternatives.

A 524.288019 MB JSON string takes up to 100% CPU on my 3.5 GHz Quad-Core Intel Core i5 
when it is being stringified with `JSON.stringify`.

You can replicate by 
```
git checkout master && git pull origin master
docker build -t sugar/cpu-benchmark .
docker run sugar/cpu-benchmark:latest
docket stats
```
