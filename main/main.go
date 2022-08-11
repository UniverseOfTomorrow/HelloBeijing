package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()
	r.GET("/bcc", func(context *gin.Context) {
		context.JSON(http.StatusOK, gin.H{
			"message": "hello World hello World Hello World",
		})
	})
	r.Run(":8888")
}
