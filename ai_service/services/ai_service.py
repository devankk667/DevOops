def process_query(query,user_id):
    #fetch user data(request,schedule)
    user_data = fetch_user_data(user_id)

    # build structured prompt
    prompt=f"""
    User Data:
    {user_data}

    Question:
    {query}

    Answer:
    """
    response=call_llm(prompt)

    return response


