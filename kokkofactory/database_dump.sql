--
-- PostgreSQL database dump
--

-- Dumped from database version 14.13 (Ubuntu 14.13-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.13 (Ubuntu 14.13-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: egg_counts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.egg_counts (
    id integer NOT NULL,
    coop_id integer NOT NULL,
    count integer NOT NULL,
    recorded_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    weight numeric
);


ALTER TABLE public.egg_counts OWNER TO postgres;

--
-- Name: egg_counts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.egg_counts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.egg_counts_id_seq OWNER TO postgres;

--
-- Name: egg_counts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.egg_counts_id_seq OWNED BY public.egg_counts.id;


--
-- Name: egg_counts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.egg_counts ALTER COLUMN id SET DEFAULT nextval('public.egg_counts_id_seq'::regclass);


--
-- Data for Name: egg_counts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.egg_counts (id, coop_id, count, recorded_at, weight) FROM stdin;
1	1	100	2024-11-16 23:15:24.762497	\N
2	2	150	2024-11-16 23:15:24.762497	\N
3	1	60	2024-11-17 02:04:27.117034	\N
4	1	65	2024-11-17 03:28:57.887738	\N
\.


--
-- Name: egg_counts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.egg_counts_id_seq', 4, true);


--
-- Name: egg_counts egg_counts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.egg_counts
    ADD CONSTRAINT egg_counts_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

